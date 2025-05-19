"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { ClipLoader } from 'react-spinners';
import Logo from '../../public/images/images.png';
import Background from '../../public/images/background.jpg';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    // Mô phỏng gọi API đăng nhập (thay thế bằng logic thực tế của bạn)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (email === 'test@example.com' && password === 'password') {
      // Đăng nhập thành công, chuyển hướng (ví dụ: dùng useRouter từ 'next/navigation')
      console.log('Đăng nhập thành công!');
      // router.push('/dashboard');
    } else {
      setError('Thông tin đăng nhập không chính xác.');
    }

    setIsLoading(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Logo" width={150} height={50} />
        </div>
        <div>
          <h2 className={styles.accessTitle}>
            Secure access to system controls and insights.
          </h2>
        </div>
        <div>
          <h1 className={styles.adminAccess}>ADMIN ACCESS</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? <ClipLoader color="#fff" size={20} /> : 'Submit'}
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
        <footer
          style={{
            width: '400px',
            fontSize: '13px',
            color: '#999',
            marginTop: 'auto',
            borderTop: '1px solid #cb8a45',
            paddingTop: '20px',
          }}
        >
          ©2025 Dune Asset Management VCC. All Rights Reserved.
        </footer>
      </div>
      <div className={styles.rightSection}>
        <Image
          src={Background}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}