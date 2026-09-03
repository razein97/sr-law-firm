import { practiceAreas } from "$lib/data/practiceAreas";
import { error } from "@sveltejs/kit";

export function load({ params }) {
    const practiceArea = practiceAreas.find(
        (area) => area.slug === params.slug
    );

    if (!practiceArea) {
        throw error(404, "Practice area not found");
    }

    return {
        practiceArea
    };
}