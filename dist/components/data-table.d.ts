import { z } from "zod";
export declare const schema: z.ZodObject<{
    id: z.ZodNumber;
    header: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    target: z.ZodString;
    limit: z.ZodString;
    reviewer: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    header: string;
    target: string;
    type: string;
    status: string;
    limit: string;
    reviewer: string;
}, {
    id: number;
    header: string;
    target: string;
    type: string;
    status: string;
    limit: string;
    reviewer: string;
}>;
export declare function DataTable({ data: initialData, }: {
    data: z.infer<typeof schema>[];
}): import("react/jsx-runtime").JSX.Element;
