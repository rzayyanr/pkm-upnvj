export function PlaceholderBanner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border-2 border-dashed border-veteran-300 bg-veteran-50 px-5 py-4 text-sm leading-6 text-veteran-800">
      <strong className="font-semibold">Info kampus — menunggu konfirmasi: </strong>
      {children}
    </div>
  );
}
