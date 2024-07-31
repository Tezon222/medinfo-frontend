import libraryPlaceholder from "@/public/assets/images/library-details.svg";
import Image from "next/image";
import { AlternateTipCard } from "../../TipCard";

const TipDetailsPage = ({ params }: { params: { id: string } }) => {
	return (
		<main className="flex w-full flex-col items-start px-6 py-14">
			<section>
				<Image
					className="size-[272px]"
					src={libraryPlaceholder as string}
					alt=""
					priority={true}
					width={272}
					height={272}
				/>
			</section>

			<section className="mt-5 flex flex-col gap-5">
				<h1 className="text-[32px] font-semibold text-medinfo-primary-darker">Title</h1>
				<p className="">
					Lorem ipsum dolor sit amet consectetur. Quis consectetur vel ultrices non. Donec nam dictum
					volutpat quis a amet arcu convallis arcu. Augue id massa dui elit. Malesuada et tortor
					vulputate dolor quis euismod lectus velit. Laoreet molestie auctor cras sed ipsum erat eget
					interdum. Quam ut blandit justo eu a euismod vel id. Lectus ornare id maecenas consectetur
					in non. Ipsum pretium neque faucibus nisi ultricies facilisis ut est. Pellentesque dictum eu
					enim sed odio proin. Accumsan amet purus dictumst ullamcorper condimentum neque porttitor
					parturient diam. Imperdiet mus ornare accumsan mi cursus fusce iaculis at. Lectus tristique
					nibh libero quam Egestas urna ornare sociis sed. Lorem dui tempus nulla faucibus justo nunc.
					Mauris cursus in odio in accumsan sagittis duis. Orci sed ullamcorper lobortis morbi nisl
					facilisis velit montes arcu. Magna amet tristique lectus ac semper consectetur. Nibh augue
					lectus nisl risus tempus dolor nullam. Ut cursus vulputate ultrices vitae sagittis pharetra
					tellus at. Vel commodo diam nibh urna. Erat quis ac in sit mattis vel tortor nunc aliquet.
					Aliquam accumsan et facilisis duis leo faucibus tortor nisl. Nulla et et adipiscing quis
					amet pharetra dignissim dis. Porttitor aliquet felis posuere in magna mauris. Dictum sit at
					egestas ac. Consequat fermentum sit gravida congue id. Sed orci condimentum feugiat et. At
					lacus arcu auctor tincidunt aliquam blandit arcu aliquam. Risus vitae est suspendisse
					tristique. Dignissim in mauris turpis sit curabitur nibh nec ac facilisi. Sollicitudin elit
					volutpat morbi feugiat sed egestas semper ultrices porttitor. Sit et facilisis amet nisi
					nulla ultrices. Bibendum cras in quisque sed praesent sollicitudin. Sit ullamcorper
					malesuada scelerisque quis. Morbi tortor nulla nec elementum viverra. In in ultrices lectus
					malesuada tellus praesent nisl eget tortor. Cursus id amet egestas arcu elementum cursus.
					Suspendisse suscipit et sit vestibulum magna. Vitae diam velit amet purus iaculis etiam.
					Urna et mauris sollicitudin sit pretium suspendisse sit. Lorem pharetra vitae proin
					volutpat. Bibendum egestas etiam ac duis odio vulputate enim imperdiet. Iaculis suspendisse
					odio purus congue morbi nibh. Blandit rhoncus volutpat ultrices eget vulputate. Eget
					ultrices sit eget tempus mauris in at habitasse. Malesuada cras semper massa ut. Tortor
					elementum lectus diam maecenas. Vulputate quis nunc nunc suspendisse bibendum tortor. Amet
					dui risus commodo urna massa pharetra id non. Vitae convallis enim hendrerit maecenas
					dictumst mi tristique elementum in. Convallis elit nulla urna eget ipsum scelerisque
					maecenas. Ornare id pellentesque orci posuere. Purus lectus diam enim et vestibulum. Gravida
					aenean dolor id dignissim amet morbi orci at. Tempus sociis condimentum mauris risus. Cum
					condimentum adipiscing at volutpat posuere in fermentum enim tempor. A nec ipsum penatibus
					augue purus sollicitudin dignissim. Purus mi gravida mauris purus feugiat. Et ut sodales dui
					sit dapibus. Sem tempor euismod odio tincidunt ut. Consectetur id varius cursus velit.
					Mauris ut eget ornare mi dictumst erat. Pharetra vitae volutpat arcu fringilla purus dui at
					nulla. Eget leo imperdiet molestie morbi. Pharetra feugiat adipiscing euismod velit. Vitae
					enim mattis diam libero ullamcorper morbi aliquam. Sit vulputate velit tempor molestie
					maecenas commodo cras est sapien. Mattis penatibus elementum morbi est tellus pellentesque.
					Volutpat sapien nibh odio enim volutpat sociis urna. Sit justo etiam morbi malesuada in
					etiam lectus faucibus nulla. Vitae enim in arcu et quam id. Nibh at diam odio tempor.
				</p>
			</section>

			<section className="mt-14 flex flex-col gap-2">
				<AlternateTipCard type="list" id={1} />
				<AlternateTipCard type="list" id={1} />
				<AlternateTipCard type="list" id={1} />
			</section>

			<section className="mt-14 grid grid-cols-2 gap-x-5">
				<AlternateTipCard type="grid" id={1} />
				<AlternateTipCard type="grid" id={1} />
			</section>
		</main>
	);
};
export default TipDetailsPage;
