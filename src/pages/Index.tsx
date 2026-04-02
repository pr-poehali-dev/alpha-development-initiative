import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { Loader2, Send, Moon, Sun, Mail } from "lucide-react";

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за обращение. Отвечу в течение 24 часов.",
    });

    setIsSubmitting(false);
    (event.target as HTMLFormElement).reset();
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
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              Принимаю заказы
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Художник по живописи и рисунку
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Создаю портреты, пейзажи и авторские картины под заказ. Работаю с маслом, акварелью и графикой.
              Превращаю ваши идеи и воспоминания в живые произведения искусства.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#contact">Заказать картину</a>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-xl">
            <img
              src="https://cdn.poehali.dev/projects/0728a19f-4470-44ae-9340-d7bff4ba05e9/files/e55bdc6f-8c2f-4418-a371-98d0a6fa3f6a.jpg"
              alt="Художественная мастерская"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Индивидуальный подход к каждому заказу — от эскиза до готовой работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Портреты на заказ</h3>
                <p className="text-muted-foreground mb-4">
                  Пишу портреты по фотографии или с натуры. Масло, акварель, уголь.
                  Идеальный подарок близким или украшение для дома.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Масло</Badge>
                  <Badge variant="secondary">Акварель</Badge>
                  <Badge variant="secondary">Уголь</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mountain" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Пейзажи и натюрморты</h3>
                <p className="text-muted-foreground mb-4">
                  Авторские пейзажи, городские виды и натюрморты. Работаю как по
                  заказу, так и с готовыми работами для продажи.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Пейзаж</Badge>
                  <Badge variant="secondary">Натюрморт</Badge>
                  <Badge variant="secondary">Городской вид</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Уроки рисования</h3>
                <p className="text-muted-foreground mb-4">
                  Индивидуальные занятия для начинающих и продолжающих.
                  Онлайн и офлайн формат, разные техники и материалы.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Онлайн</Badge>
                  <Badge variant="secondary">Офлайн</Badge>
                  <Badge variant="secondary">Для начинающих</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Давайте создадим что-то красивое</h2>
            <p className="text-lg text-muted-foreground">
              Готовы сделать заказ или хотите узнать подробнее? Напишите — обсудим детали.
            </p>
          </div>

          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Написать художнику</CardTitle>
              <CardDescription>
                Расскажите, что хотите заказать. Отвечу в течение 24 часов.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" name="name" placeholder="Ваше имя" required disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Опишите желаемую картину: тематика, размер, техника, срок..."
                    className="min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-6 mt-8">
            <a href="mailto:artist@example.com" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="text-sm">artist@example.com</span>
            </a>
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