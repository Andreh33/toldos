'use client';

import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-sand-50 group-[.toaster]:text-ink-900 group-[.toaster]:border group-[.toaster]:border-sand-200 group-[.toaster]:shadow-card',
          description: 'group-[.toast]:text-ink-700',
          actionButton: 'group-[.toast]:bg-ink-900 group-[.toast]:text-sand-50',
          cancelButton: 'group-[.toast]:bg-sand-100 group-[.toast]:text-ink-700',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
