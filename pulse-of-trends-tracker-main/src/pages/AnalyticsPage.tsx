
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const AnalyticsPage = () => {
  return (
    <Layout title="Analytics">
      <div className="flex flex-col items-center justify-center h-[calc(100vh-180px)]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Analytics Coming Soon</CardTitle>
            <CardDescription className="text-center">
              Advanced analytics and reporting features are under development
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-4 animate-pulse-scale">
              <BarChart3 className="h-12 w-12 text-muted-foreground" />
            </div>
            <p className="text-center text-muted-foreground">
              Our analytics module will provide comprehensive reports, predictive trend analysis, 
              and custom dashboards to help you understand and leverage trend data more effectively.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AnalyticsPage;
