interface Props {
    height: string; // h-4 を動的に設定するためのプロパティ
    width: string;  // w-16 を動的に設定するためのプロパティ
  }
  
  export default function LoadingSkeleton({ height, width }: Props) {
    return (
      <div className={`bg-slate-300 rounded col-span-2 animate-pulse ${height} ${width}`} />
    );
  };
  
  