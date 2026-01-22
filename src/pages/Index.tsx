import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-xl font-bold">Охрана Труда</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'about', label: 'О специалисте' },
              { id: 'services', label: 'Услуги' },
              { id: 'regulations', label: 'Нормативная база' },
              { id: 'contact', label: 'Консультация' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
          <div className="container mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональная охрана труда<br />
              <span className="text-primary">для вашего бизнеса</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Комплексные решения по обеспечению безопасности труда: аудит, консультации, документация и обучение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" onClick={() => scrollToSection('contact')}>
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('services')}>
                Узнать больше
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { icon: 'FileCheck', title: 'Документация', desc: 'Разработка и актуализация' },
                { icon: 'Users', title: 'Обучение', desc: 'Инструктажи и тренинги' },
                { icon: 'Search', title: 'Аудит', desc: 'Оценка соответствия нормам' },
              ].map((item, index) => (
                <Card key={index} className="border-border bg-card hover:border-primary transition-colors">
                  <CardContent className="pt-6 text-center">
                    <Icon name={item.icon as any} className="mx-auto mb-4 text-primary" size={40} />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-secondary">
          <div className="container mx-auto max-w-5xl animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">О специалисте</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-card rounded-lg p-8 border border-border">
                  <Icon name="Award" className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-4">Квалификация и опыт</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Сертифицированный специалист по охране труда</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Более 10 лет практического опыта</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Аккредитация в реестре Минтруда РФ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Свыше 200 успешных проектов</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="GraduationCap" className="text-primary" size={24} />
                      Образование
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Высшее техническое образование, специализация "Безопасность технологических процессов и производств"
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="FileText" className="text-primary" size={24} />
                      Сертификаты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Актуальные удостоверения по охране труда, пожарной безопасности, промышленной безопасности
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Услуги</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'ClipboardCheck',
                  title: 'Аудит системы охраны труда',
                  desc: 'Комплексная проверка соответствия требованиям законодательства, выявление нарушений и рисков',
                },
                {
                  icon: 'FileEdit',
                  title: 'Разработка документации',
                  desc: 'Положения, инструкции, программы инструктажей, журналы учёта',
                },
                {
                  icon: 'Users',
                  title: 'Проведение обучения',
                  desc: 'Вводные и целевые инструктажи, обучение по охране труда для различных категорий работников',
                },
                {
                  icon: 'AlertTriangle',
                  title: 'Оценка профессиональных рисков',
                  desc: 'Идентификация опасностей, анализ и разработка мероприятий по управлению рисками',
                },
                {
                  icon: 'Briefcase',
                  title: 'Аутсорсинг охраны труда',
                  desc: 'Полное или частичное ведение функций специалиста по охране труда в вашей организации',
                },
                {
                  icon: 'MessageSquare',
                  title: 'Консультационная поддержка',
                  desc: 'Экспертные рекомендации по вопросам охраны труда, подготовка к проверкам',
                },
              ].map((service, index) => (
                <Card key={index} className="border-border hover:border-primary transition-all hover:scale-105">
                  <CardHeader>
                    <Icon name={service.icon as any} className="text-primary mb-2" size={36} />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{service.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="regulations" className="py-20 px-4 bg-secondary">
          <div className="container mx-auto max-w-5xl animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Нормативная база</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Трудовой кодекс РФ',
                  desc: 'Раздел X. Охрана труда',
                  link: 'consultant.ru',
                },
                {
                  title: 'Приказ Минтруда № 774н',
                  desc: 'О правилах по охране труда',
                  link: 'consultant.ru',
                },
                {
                  title: 'Приказ Минтруда № 796н',
                  desc: 'Примерное положение о системе управления охраной труда',
                  link: 'consultant.ru',
                },
                {
                  title: 'ЕИСОТ',
                  desc: 'Единая информационная система охраны труда',
                  link: 'eisot.rosmintrud.ru',
                },
                {
                  title: 'Минтруд России',
                  desc: 'Официальный сайт Министерства труда',
                  link: 'rosmintrud.ru',
                },
                {
                  title: 'Роструд',
                  desc: 'Федеральная служба по труду и занятости',
                  link: 'rostrud.gov.ru',
                },
              ].map((item, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="ExternalLink" className="text-primary" size={20} />
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.link}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-2xl animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-center">Записаться на консультацию</h2>
            <p className="text-center text-muted-foreground mb-12">
              Заполните форму, и мы свяжемся с вами для подбора удобного времени
            </p>
            <Card className="border-border">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и фамилия *</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Организация</Label>
                    <Input id="company" placeholder="ООО &quot;Название&quot;" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <Input id="service" placeholder="Например: аудит охраны труда" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Расскажите о вашей задаче..." rows={4} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Shield" className="text-primary" size={24} />
            <span className="font-semibold">Охрана Труда</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Профессиональные услуги по охране труда для вашего бизнеса
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+79000000000" className="hover:text-primary transition-colors">
              +7 (900) 000-00-00
            </a>
            <a href="mailto:info@oxtrud.ru" className="hover:text-primary transition-colors">
              info@oxtrud.ru
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
