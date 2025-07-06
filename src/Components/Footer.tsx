const FooterSection = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 px-4">
      <div className="text-center">
        <p className="text-base">
          &copy; {new Date().getFullYear()} Circle BDSM Pro. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
