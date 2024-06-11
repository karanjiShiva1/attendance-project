import { Button } from "flowbite-react";

function App() {

  return (
    <>
    <div>
      <Button>Click me</Button>

      <div
  className="inline-flex rounded-md shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-1 dark:focus:shadow-dark-1 dark:active:shadow-dark-1"
  role="group">
  <button
    type="button"
    className="inline-block rounded-s bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 motion-reduce:transition-none"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Left
  </button>
  <button
    type="button"
    className="inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 motion-reduce:transition-none"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Middle
  </button>
  <button
    type="button"
    className="inline-block rounded-e bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 motion-reduce:transition-none"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Right
  </button>
</div>

    </div>
    </>
  )
}

export default App
