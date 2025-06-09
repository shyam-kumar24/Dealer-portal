export default function Toast() {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-none bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] h-[150px] md:h-[200px] bg-white rounded-xl shadow-lg flex items-center justify-center">
        <p className="text-green-700 text-base md:text-lg font-semibold">
          ✅ Order Placed Successfully!
        </p>
      </div>
    </div>
  );
}
