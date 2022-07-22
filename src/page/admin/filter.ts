import { Listbycate } from "../../api/product"

const FilterProd = {
    render: async (category: number) => {
        const dataFilter = await Listbycate(2)
        const data = dataFilter.data

        console.log(data);

        return `
Hi
        `
    }
}
export default FilterProd