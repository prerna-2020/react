function ToastMsg({ children }) {
  return (
    <p className="mx-4 text-white bg-gray-900 rounded-xl py-2 px-4  animate-bounce text-xs">
      {children}
    </p>
  );
}

export default ToastMsg;
