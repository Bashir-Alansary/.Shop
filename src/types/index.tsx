type ReviewType = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

export interface ItemType {
    id: number,
      title: string,
      description: string,
      category: string,
      price: number,
      discountPercentage: number,
      rating: number,
      stock: number,
      tags: string[],
      brand: string,
      sku: string,
      weight: number,
      dimensions: {
        width: number,
        height: number,
        depth: number
      },
      warrantyInformation: string,
      shippingInformation: string,
      availabilityStatus: string,
      reviews: ReviewType[],
      returnPolicy: string,
      minimumOrderQuantity: number,
      meta: {
        createdAt: string,
        updatedAt: string,
        barcode: string,
        qrCode: string
      },
      images: string[],
      thumbnail: string,
}

export interface CartItemType extends ItemType {
  qty: number,
}

export type DropdownItemType = {
  id: number,
  name: string,
  value: number| string,
}

export type ActiveBrandType = undefined | number;
