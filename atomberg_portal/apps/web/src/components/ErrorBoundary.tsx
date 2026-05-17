'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface State {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return React.createElement(
        'section',
        { className: 'flex min-h-screen items-center justify-center bg-slate-50 p-8' },
        React.createElement(
          'section',
          { className: 'max-w-md rounded-2xl bg-white p-8 shadow-lg text-center' },
          React.createElement(AlertTriangle, { size: 48, className: 'mx-auto mb-4 text-rose-500' }),
          React.createElement('h2', { className: 'text-xl font-bold text-slate-900 mb-2' }, 'Something went wrong'),
          React.createElement(
            'p',
            { className: 'text-sm text-slate-500 mb-6' },
            this.state.message || 'An unexpected error occurred.'
          ),
          React.createElement(
            'button',
            {
              type: 'button',
              onClick: () => window.location.reload(),
              className: 'btn-primary'
            },
            'Reload Page'
          )
        )
      );
    }
    return this.props.children;
  }
}
