import { client } from "@/sanity/lib/client";
import { bannerQuerry, bestSellersQuery, categoryQuery, productsQuery } from "./query";

export const revalidate =0;

const getBannersData = async () => {
    const bannersData = await client.fetch(bannerQuerry);
    return bannersData;
} 

const getProductsData = async () => {
    const productsData = await client.fetch(productsQuery);
    return productsData;
} 

const getCategorysData = async () => {
    const categoryData = await client.fetch(categoryQuery);
    return categoryData
}

const getBestSellersData = async () => {
    const bestSellersData = await client.fetch(bestSellersQuery);
    return bestSellersData;
} 

export {getBannersData, getProductsData, getBestSellersData, getCategorysData}