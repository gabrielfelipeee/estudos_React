import Home from "./pages/Home"
import Header from "./components/Header"
import { FormProvider } from "./context/FormContext"
import { HomeProvider } from "./context/HomeContext"

function App() {
  return (
    <>
      <Header />
      <HomeProvider>
        <FormProvider>
          <Home />
        </FormProvider>
      </HomeProvider>
    </>
  )
}
export default App
