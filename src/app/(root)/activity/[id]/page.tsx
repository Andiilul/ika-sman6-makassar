
import { ActivityDetail } from "@/feature/Activity/ActivityDetail";

interface Props {
  params: { id: string };
}

export default function ActivityDetailPage({ params }: Props) {
  return <ActivityDetail id={params.id} />;
}
