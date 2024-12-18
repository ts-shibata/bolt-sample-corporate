import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">ほにゃららCorp</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary">
              ホーム
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-primary">
              お知らせ
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              お問い合わせ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;