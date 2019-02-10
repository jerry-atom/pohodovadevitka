import CMS from "netlify-cms";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import TeamPagePreview from "./preview-templates/TeamPagePreview";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("team", TeamPagePreview);
