'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactForm as ContactFormType } from '@/types/contact';

const ContactForm = () => {
  const [step, setStep] = useState<'input' | 'confirm' | 'complete'>('input');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>();

  const onSubmit = () => {
    if (step === 'input') {
      setStep('confirm');
    } else if (step === 'confirm') {
      // TODO: Implement form submission
      setStep('complete');
    }
  };

  if (step === 'complete') {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">送信完了</h2>
        <p className="text-gray-600 mb-8">
          お問い合わせありがとうございます。
          <br />
          内容を確認次第、担当者よりご連絡させていただきます。
        </p>
        <button
          onClick={() => setStep('input')}
          className="text-primary hover:underline"
        >
          新しいお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('name', { required: '名前は必須です' })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            disabled={step === 'confirm'}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'メールアドレスは必須です',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '有効なメールアドレスを入力してください',
              },
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            disabled={step === 'confirm'}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            電話番号
          </label>
          <input
            type="tel"
            {...register('phone', {
              pattern: {
                value: /^[0-9-]+$/,
                message: '有効な電話番号を入力してください',
              },
            })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            disabled={step === 'confirm'}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            お問い合わせ種別 <span className="text-red-500">*</span>
          </label>
          <select
            {...register('type', { required: 'お問い合わせ種別は必須です' })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            disabled={step === 'confirm'}
          >
            <option value="general">一般的なお問い合わせ</option>
            <option value="business">ビジネスに関するお問い合わせ</option>
            <option value="recruitment">採用に関するお問い合わせ</option>
            <option value="other">その他</option>
          </select>
          {errors.type && (
            <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message', { required: 'お問い合わせ内容は必須です' })}
            rows={5}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            disabled={step === 'confirm'}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex justify-center gap-4">
          {step === 'confirm' && (
            <button
              type="button"
              onClick={() => setStep('input')}
              className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              修正する
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700"
          >
            {step === 'input' ? '確認する' : '送信する'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
