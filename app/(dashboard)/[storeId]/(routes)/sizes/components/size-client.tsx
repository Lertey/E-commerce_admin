"use client"

import * as React from "react";
import {useParams, useRouter} from "next/navigation";

import {Plus} from "lucide-react";

import Heading from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

import {SizeColumn, columns} from "./columns";
import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";


interface BillboardClientProps {
    data: SizeColumn[]
}

export const SizeClient: React.FC<BillboardClientProps> = ({
                                                                    data
                                                                }) => {
    const router = useRouter()
    const params = useParams()

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Sizes (${data.length})`} description="Manage sizes for your store"/>
                <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
                    <Plus className="h-4 w-4 mr-2"/>
                    Add new
                </Button>
            </div>
            <Separator/>

            <DataTable columns={columns} data={data} searchKey="name" />
            <Heading title={"API"} description="API calls for Sizes" />
            <Separator/>
            <ApiList entityName="sizes" entityIdName="sizeId"/>
        </>
    )
}