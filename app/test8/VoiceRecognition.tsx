"use client";
import React, { useEffect, useRef, useState } from 'react';

const VoiceRecognition: React.FC = () => {
  // MediaRecorderのインスタンスを保持するための参照
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  // 録音された音声データを保持するための参照
  const audioChunksRef = useRef<Blob[]>([]);
  // 録音中かどうかを示す状態
  const [isRecording, setIsRecording] = useState(false);
  // 録音が完了したかどうかを示す状態
  const [isRecorded, setIsRecorded] = useState(false);

  useEffect(() => {
    let silenceTimeout: NodeJS.Timeout;

    const startRecording = async () => {
      // マイクからの音声入力を取得
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      // 録音データが利用可能になったときに呼び出されるイベントリスナー
      mediaRecorder.addEventListener('dataavailable', (event) => {
        audioChunksRef.current.push(event.data);
      });

      // 録音を開始
      mediaRecorder.start();

      // 無音検出のためのAudioContextとAnalyserNodeを設定
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      source.connect(analyser);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const silenceThreshold = 10; // 無音のしきい値
      const silenceDuration = 800; // 無音の継続時間（ミリ秒）
      let silenceStart = 0;

      const checkSilence = () => {
        analyser.getByteFrequencyData(dataArray);
        const volume = dataArray.reduce((sum, val) => sum + val, 0) / bufferLength;

        if (volume < silenceThreshold) {
          if (silenceStart === 0) {
            silenceStart = Date.now();
          } else if (Date.now() - silenceStart > silenceDuration) {
            mediaRecorder.stop();
            setIsRecording(false);
            setIsRecorded(true);
          }
        } else {
          silenceStart = 0;
        }

        if (isRecording) {
          silenceTimeout = setTimeout(checkSilence, 100);
        }
      };

      silenceTimeout = setTimeout(checkSilence, 100);
    };

    if (isRecording) {
      startRecording();
    }

    return () => {
      clearTimeout(silenceTimeout);
      if (mediaRecorderRef.current?.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    };
  }, [isRecording]);

  // 録音を開始するハンドラ
  const handleStartRecording = () => {
    setIsRecording(true);
    setIsRecorded(false);
  };

  // 録音を停止するハンドラ
  const handleStopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };

  // 録音データをダウンロードするハンドラ
  const handleDownload = () => {
    const blob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    a.href = url;
    a.download = `recording-${timestamp}.wav`;
    a.click();
  };

  return (
    <div>
      {!isRecording && !isRecorded && (
        <button onClick={handleStartRecording}>Start Recording</button>
      )}
      {isRecording && <button onClick={handleStopRecording}>Stop Recording</button>}
      {isRecorded && <button onClick={handleDownload}>Download Recording</button>}
    </div>
  );
};

export default VoiceRecognition;