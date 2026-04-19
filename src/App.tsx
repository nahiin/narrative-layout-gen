import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/wire/Layout";
import Home from "./pages/Home";
import Kitchens from "./pages/Kitchens";
import KitchenDetail from "./pages/KitchenDetail";
import Living from "./pages/Living";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Catalogs from "./pages/Catalogs";
import Magazine from "./pages/Magazine";
import Certifications from "./pages/Certifications";
import Warranty from "./pages/Warranty";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/kitchens" element={<Kitchens />} />
            <Route path="/kitchens/:slug" element={<KitchenDetail />} />
            <Route path="/living" element={<Living />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalogs" element={<Catalogs />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/links" element={<Links />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
