export default function Footer() {
  const shader = () => {
    window.open(
      "https://sohamdata.github.io/website/",
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
    );
  };

  return (
    <footer className="mt-12 mb-0 flex w-full h-[11vh] justify-center items-center bg-[#0F216B] text-[#B6EADA]">
      <span className="cursor-pointer ml-1 hover:underline" onClick={shader}>
        &copy; 2025 Soham Datta
      </span>
    </footer>
  );
}
