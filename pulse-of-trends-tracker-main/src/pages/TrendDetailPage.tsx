
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import TrendDetails from "@/components/trends/TrendDetails";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getTrendDetails } from "@/data/mockData";
import { useEffect, useState } from "react";
import { TrendDetail } from "@/types/trends";

const TrendDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [trend, setTrend] = useState<TrendDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No trend ID provided");
      return;
    }

    try {
      const trendData = getTrendDetails(id);
      setTrend(trendData);
    } catch (err) {
      console.error("Failed to fetch trend:", err);
      setError("Trend not found");
    }
  }, [id]);

  return (
    <Layout title="Trend Details">
      <div className="mb-6">
        <Button
          variant="ghost"
          className="gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Trends
        </Button>
      </div>

      {error ? (
        <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-md">
          {error}
        </div>
      ) : trend ? (
        <TrendDetails trend={trend} />
      ) : (
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse">Loading trend details...</div>
        </div>
      )}
    </Layout>
  );
};

export default TrendDetailPage;
