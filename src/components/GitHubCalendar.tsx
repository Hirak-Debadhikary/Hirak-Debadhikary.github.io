import { GitHubCalendar } from 'react-github-calendar';
import { Github } from 'lucide-react';

const GitHubCalendarSection = () => {
  const selectLastHalfYear = (contributions: any[]) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfActivity = date.getMonth();
      return (
        date.getFullYear() === currentYear &&
        monthOfActivity > currentMonth - shownMonths &&
        monthOfActivity <= currentMonth
      );
    });
  };

  const customTheme = {
    light: ['#1e1e2e', '#6366f1', '#8b5cf6', '#a855f7', '#ec4899'],
    dark: ['#1e1e2e', '#6366f1', '#8b5cf6', '#a855f7', '#ec4899'],
  };

  return (
    <section id="github-activity" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-3">
            <Github className="h-8 w-8 text-primary" />
            GitHub Activity
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My contribution graph from GitHub - a visual representation of my coding activity
          </p>
        </div>

        <div className="flex justify-center">
          <div className="glass p-6 sm:p-8 rounded-2xl overflow-x-auto max-w-full">
            <GitHubCalendar
              username="Hirak-Debadhikary"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              colorScheme="dark"
              labels={{
                totalCount: '{{count}} contributions in the last year',
              }}
            />
            <div className="mt-6 flex justify-center">
              <a
                href="https://github.com/Hirak-Debadhikary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Github className="h-5 w-5" />
                View Full Profile on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubCalendarSection;
