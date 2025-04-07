"use client";

import { Loader } from "lucide-react";
import { create } from "zustand";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

// Zustand store
interface PdfGeneratingModalState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const usePdfGeneratingModalState = create<PdfGeneratingModalState>((set) => ({
  open: false,
  setOpen: (open: boolean) => {
    console.log("PDF Generating Modal State Changed:", open);
    set({ open });
  },
}));

// Component
export default function GeneratingPdfModal() {
  const { open } = usePdfGeneratingModalState();

  return (
    <Dialog open={open}>
<DialogContent className="max-w-2xl">
  <DialogHeader>
    <DialogTitle className="text-2xl">Generate Your Resume</DialogTitle>
    <DialogDescription>We are generating your PDF. This may take a moment.</DialogDescription>
  </DialogHeader>
  <div className="flex items-center justify-center py-4">
    <Loader className="mr-2 h-6 w-6 animate-spin" />
  </div>
</DialogContent>
    </Dialog>
  );
}
