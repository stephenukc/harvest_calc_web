import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { Heading, Subheading } from "@/components/heading";

export default function CropFarming() {
  return (
    <>
      <Heading className="mb-8">Crop Farming</Heading>
      <section>
        <Subheading>Cereal Grains</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/crop-farming/wheat" outline>
            <div className="py-2">Wheat</div>
          </Button>
          <Button href="/dashboard/crop-farming/rice" outline>
            <div className="py-2">Rice</div>
          </Button>
          <Button href="/dashboard/crop-farming/corn" outline>
            <div className="py-2">Corn</div>
          </Button>
          <Button href="/dashboard/crop-farming/barley" outline>
            <div className="py-2">Barley</div>
          </Button>
          <Button href="/dashboard/crop-farming/oats" outline>
            <div className="py-2">Oats</div>
          </Button>
        </div>
      </section>
      <Divider className="my-4" soft />
      <section>
        <Subheading>Legumes</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/crop-farming/soybeans" outline>
            <div className="py-2">Soybeans</div>
          </Button>
          <Button href="/dashboard/crop-farming/lentils" outline>
            <div className="py-2">Lentils</div>
          </Button>
          <Button href="/dashboard/crop-farming/peas" outline>
            <div className="py-2">Peas</div>
          </Button>
        </div>
      </section>
      <Divider className="my-4" soft />
      <section>
        <Subheading>Vegetables</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/crop-farming/tomatoes" outline>
            <div className="py-2">Tomatoes</div>
          </Button>
          <Button href="/dashboard/crop-farming/potatoes" outline>
            <div className="py-2">Potatoes</div>
          </Button>
          <Button href="/dashboard/crop-farming/carrots" outline>
            <div className="py-2">Carrots</div>
          </Button>
          <Button href="/dashboard/crop-farming/lettuce" outline>
            <div className="py-2">Lettuce</div>
          </Button>
          <Button href="/dashboard/crop-farming/cucumbers" outline>
            <div className="py-2">Cucumbers</div>
          </Button>
        </div>
      </section>
      <Divider className="my-4" soft />
      <section>
        <Subheading>Fruits</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/crop-farming/apples" outline>
            <div className="py-2">Apples</div>
          </Button>
          <Button href="/dashboard/crop-farming/oranges" outline>
            <div className="py-2">Oranges</div>
          </Button>
          <Button href="/dashboard/crop-farming/grapes" outline>
            <div className="py-2">Grapes</div>
          </Button>
          <Button href="/dashboard/crop-farming/bananas" outline>
            <div className="py-2">Bananas</div>
          </Button>
        </div>
      </section>
      <Divider className="my-4" soft />
      <section>
        <Subheading>Root Crops</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/crop-farming/beets" outline>
            <div className="py-2">Roots</div>
          </Button>
          <Button href="/dashboard/crop-farming/radishes" outline>
            <div className="py-2">Radishes</div>
          </Button>
          <Button href="/dashboard/crop-farming/turnips" outline>
            <div className="py-2">Turnips</div>
          </Button>
        </div>
      </section>
      <Divider className="my-4" soft />
      <section>
        <Subheading>Oilseeds</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/crop-farming/sunflowers" outline>
            <div className="py-2">Sunflowers</div>
          </Button>
          <Button href="/dashboard/crop-farming/canola" outline>
            <div className="py-2">Canola</div>
          </Button>
          <Button href="/dashboard/crop-farming/flaxseed" outline>
            <div className="py-2">Flaxseed</div>
          </Button>
        </div>
      </section>
      <Divider className="my-4" soft />
      <section>
        <Subheading>Fiber Crops</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/crop-farming/cotton" outline>
            <div className="py-2">Cotton</div>
          </Button>
          <Button href="/dashboard/crop-farming/hemp" outline>
            <div className="py-2">Hemp</div>
          </Button>
        </div>
      </section>
    </>
  );
}
