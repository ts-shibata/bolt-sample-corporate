import { useState } from 'react';
import { ContactForm } from '@/types/contact';

interface UseContactReturn {
  loading: boolean;
  error: string | null;
  success: boolean;
  submitContact: (data: ContactForm) => Promise<void>;
}

export function useContact(): UseContactReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitContact = async (data: ContactForm) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'お問い合わせの送信に失敗しました');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, submitContact };
}