'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { signIn } from 'next-auth/react';

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-600"
      >
        Login
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl">
                  <Dialog.Title as="h3" className="text-lg font-medium text-gray-900 dark:text-white">
                    Sign in to Tessarion-Tsc
                  </Dialog.Title>
                  <div className="mt-4 flex flex-col gap-3">
                    <button
                      onClick={() => signIn('credentials')}
                      className="px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-600"
                    >
                      Login with Username/Password
                    </button>
                    <button
                      onClick={() => signIn('github')}
                      className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900"
                    >
                      Continue with GitHub
                    </button>
                    <button
                      onClick={() => signIn('google')}
                      className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                    >
                      Continue with Google
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
            }
