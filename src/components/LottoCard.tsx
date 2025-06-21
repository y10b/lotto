export default function LottoCard({ numbers }: { numbers: number[] }) {
  return (
    <div className="flex items-center gap-2 p-3 bg-white shadow-md rounded-xl">
      {numbers.map((num, i) => (
        <div
          key={i}
          className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-lg"
        >
          {num}
        </div>
      ))}
    </div>
  );
}
