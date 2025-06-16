import { ThemeToggle } from "./components/theme-toggle"
import { HeaderCarousel } from "./components/header-carousel"
import { ProjectsGrid } from "./components/projects-grid"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      <HeaderCarousel />
      <section className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>
        <ProjectsGrid />
      </section>
    </main>
  )
}