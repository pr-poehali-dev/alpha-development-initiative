import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Moon, Sun } from "lucide-react";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Palette" size={16} className="text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">Малетина Полина</span>
          </div>
          <div className="flex items-center gap-2">
            <nav className="flex gap-1">
              <Button variant="ghost" onClick={() => navigate("/")}>О себе</Button>
              <Button variant="default">Портфолио</Button>
            </nav>
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Portfolio Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Примеры работ</h1>
            <p className="text-lg text-muted-foreground">
              Видео с процессом рисования и готовыми картинами
            </p>
          </div>

          <div className="grid gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-card border">
              <div className="aspect-video">
                <iframe
                  src="https://rutube.ru/play/embed/6040aa123b70b0709611ccd7c1c65ab2/"
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Работа художника</h3>
                <p className="text-muted-foreground text-sm mt-1">Пример живописи Малетиной Полины</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2024 Малетина Полина — Специалист по живописи. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
