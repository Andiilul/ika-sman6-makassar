import { ContactUs } from "@/feature/ContactUs";
import { IGlobal } from "@/interfaces/Global";
import { getGlobals } from "@/services/getGlobal";

export default async function ContactUsPage() {
	const globals: IGlobal | null = await getGlobals();

  console.log(globals?.call_center);

	return <ContactUs globals={globals} />;
}
