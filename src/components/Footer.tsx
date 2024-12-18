import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ほにゃららCorp</h3>
            <p className="text-gray-300">
              革新的なITソリューションで、ビジネスの未来を創造します。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <address className="text-gray-300 not-italic">
              <p>〒100-0001</p>
              <p>東京都千代田区1-1-1</p>
              <p>TEL: 03-1234-5678</p>
              <p>Email: info@hogehogecorp.example.com</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">SNS</h4>
            <div className="flex space-x-4">
              {/* SNSリンクをここに追加 */}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} TechCorp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;