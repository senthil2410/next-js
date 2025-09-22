"use client";

import GlobalError from "@/app/global-error";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return <GlobalError error={error} reset={reset} />;
}
