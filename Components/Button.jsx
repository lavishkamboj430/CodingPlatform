function Button({ children, variant = "solid" }) {
  const base = "rounded-md px-5 py-2.5 text-sm font-medium";
  const styles =
    variant === "solid"
      ? "border border-zinc-700 text-white bg-zinc-900 "
      : "border border-zinc-700 text-white hover:bg-zinc-900";
  return <button className={`${base} ${styles}`}>{children}</button>;
}
export default Button