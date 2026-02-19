import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Flow from "../components/sections/Flow";
import Dashboard from "../components/sections/Dashboard";
import Signature from "../components/sections/Signature";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Flow />
      <Dashboard />
      <Signature />
    </Layout>
  );
}