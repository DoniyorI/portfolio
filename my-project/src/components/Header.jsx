import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Logo/LogoV2.png";
import pdf from "../assets/skills/PDF.png";

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Skills", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Experience", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-black-pearl-500 ">
      {({ open }) => (
        <>
          <div className="fixed top-0 bg-black-pearl-500 shadow-xl z-50 w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src={Logo}
                    alt="Logo"
                  />
                  <img
                    className="hidden h-10 w-auto lg:block"
                    src={Logo}
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-amber-500"
                            : "text-gray-600 hover:bg-gray-700 hover:text-amber-500",
                          "px-3 py-2 text-sm font-Roboto"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden fixed bg-black-pearl-500 w-full z-40 translate-y-10">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-amber-500"
                      : "text-gray-600 hover:bg-gray-700 hover:text-amber-500",
                    "block px-3 py-2 rounded-md text-base font-medium font-Roboto"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
