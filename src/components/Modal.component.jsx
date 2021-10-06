import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Modal = ({answers}) =>{
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="block mx-auto mb-6 py-4 px-6 text-white bg-darkCyan hover:bg-viking max-w-max rounded-md font-fraunces font-bold"
        >
          Create my plan!
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-darkGrayBlue bg-opacity-80"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="bg-bgModal text-white font-medium text-featuresTitleMobile px-8 py-6"
                >
                  Order Summary
                </Dialog.Title>
                <div className='text-gray text-collectionTitle px-8 pt-6 pb-3'>
                    <h4>“I drink my coffee as <span className='text-darkCyan'>{answers.drink}</span>, with a <span className='text-darkCyan'>{answers.type}</span> type of bean. <span className='text-darkCyan'>{answers.quantity}</span> ground ala <span className='text-darkCyan'>{answers.grind}</span>, sent to me <span className='text-darkCyan'>{answers.delivery}</span>."</h4>
                </div>
                <div className="mt-2">
                  <p className="text-gray  px-8 pt-3 pb-6">
                  Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
                  </p>
                </div>

                <div className="mt-2">
                  <button
                    type="button"
                    className="block mx-auto mb-6 py-4 px-6 text-white bg-darkCyan hover:bg-viking max-w-max rounded-md font-fraunces font-bold"
                    onClick={closeModal}
                  >
                    Checkout - $14.00 / mo
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
