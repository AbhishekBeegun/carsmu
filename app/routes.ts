import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("listing","routes/listing.tsx"),
    route("vehicleDetails", "routes/vehicleDetails.tsx"),
    route("sellmycar", "routes/sellmycar.tsx"),
    route("financeprotocol", "routes/financeprotocol.tsx"),
    route("ourpartners", "routes/ourpartners.tsx"),
    route("blogs", "routes/bloglisting.tsx"),
    route("blog", "routes/blogDetails.tsx")

] satisfies RouteConfig;
