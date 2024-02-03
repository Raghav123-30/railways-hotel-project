import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="grid hrid-cols-1 gap-4 md:grid-cols-2 ">
      <Card className="p-32">
        <CardHeader>
          <CardTitle className=" text-rose-500">
            Room data visualization
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="p-32">
        <CardHeader>
          <CardTitle className=" text-rose-500">
            Customer data visualization
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default HomePage;
