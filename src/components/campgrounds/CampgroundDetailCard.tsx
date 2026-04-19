"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Campground } from "@/types";
import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";

interface CampgroundDetailCardProps {
  campground: Campground | null;
  loading?: boolean;
  onBook?: (id: string) => void;
  onBack?: () => void;
}

export default function CampgroundDetailCard({
  campground,
  loading = false,
  onBook,
  onBack,
}: CampgroundDetailCardProps) {
  if (loading) {
    return <LoadingState message="Loading campground details..." />;
  }

  if (!campground) {
    return (
      <EmptyState
        title="Campground Not Found"
        message="The campground you are looking for does not exist."
      />
    );
  }

  const { _id, name, address, district, province, postalcode, tel, region } =
    campground;

  const details = [
    { label: "District", value: district },
    { label: "Province", value: province },
    { label: "Postal Code", value: postalcode },
    { label: "Telephone", value: tel },
  ];

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[280px] w-full bg-gray-100 lg:min-h-[420px]">
          <Image
            src="/img/campImg.jpg"
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 p-6">
          <div>
            <p className="mb-2 text-sm font-medium text-blue-600">{region}</p>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">Address</p>
              <p>{address}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {details.map((item) => (
                <div key={item.label}>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            {onBack && (
              <Button variant="outline" onClick={onBack} fullWidth>
                Back
              </Button>
            )}
            <Button onClick={() => onBook?.(_id)} fullWidth>
              Book This Campground
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
