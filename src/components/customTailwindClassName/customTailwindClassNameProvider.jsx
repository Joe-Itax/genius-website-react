import tailwindContext from '../../context/tailwind-context.jsx';
import tailwindClassNameComponent from "../models/services/tailwindCNServices";

function CustomTailwindClassNameProvider({ children }) {
  return (
    <tailwindContext.Provider value={tailwindClassNameComponent}>
      {children}
    </tailwindContext.Provider>
  );
}

export default CustomTailwindClassNameProvider;