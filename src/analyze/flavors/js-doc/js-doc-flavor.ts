import { AnalyzerFlavor } from "../analyzer-flavor";
import { discoverDefinitions } from "./discover-definitions";
import { discoverFeatures } from "./discover-features";
import { refineDeclaration } from "./refine-declaration";
import { refineFeature } from "./refine-feature";

export class JsDocFlavor implements AnalyzerFlavor {
	discoverDefinitions = discoverDefinitions;

	discoverFeatures = discoverFeatures;

	refineFeature = refineFeature;

	refineDeclaration = refineDeclaration;
}