import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { Heading, Subheading } from "@/components/heading";

export default function LivestockFarming() {
  return (
    <>
      <Heading className="mb-8">Livestock Farming</Heading>
      <section>
        <Subheading>Cattle</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/livestock-farming/dairy" outline>
            <div className="py-2">Dairy Cattle</div>
          </Button>
          <Button href="/dashboard/livestock-farming/beef" outline>
            <div className="py-2">Beef Cattle</div>
          </Button>
        </div>
      </section>
      <Divider className="my-4" soft />
      <section>
        <Subheading>Poultry</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/livestock-farming/chickens" outline>
            <div className="py-2">Chickens</div>
          </Button>
          <Button href="/dashboard/livestock-farming/turkeys" outline>
            <div className="py-2">Turkeys</div>
          </Button>
          <Button href="/dashboard/livestock-farming/ducks" outline>
            <div className="py-2">Ducks</div>
          </Button>
          <Button href="/dashboard/livestock-farming/geese" outline>
            <div className="py-2">Geese</div>
          </Button>
        </div>
      </section>
      <Divider className="my-4" soft />
      <section>
        <Subheading>Aquaculture</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/livestock-farming/fish" outline>
            <div className="py-2">Fish farming</div>
          </Button>
          <Button href="/dashboard/livestock-farming/shellfish" outline>
            <div className="py-2">Shellfish farming</div>
          </Button>
        </div>
      </section>
      <Divider className="my-4" soft />
      <section>
        <Subheading>Other Animals</Subheading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <Button href="/dashboard/livestock-farming/sheep" outline>
            <div className="py-2">Sheep</div>
          </Button>
          <Button href="/dashboard/livestock-farming/goats" outline>
            <div className="py-2">Goats</div>
          </Button>
          <Button href="/dashboard/livestock-farming/pigs" outline>
            <div className="py-2">Pigs</div>
          </Button>
          <Button href="/dashboard/livestock-farming/horses" outline>
            <div className="py-2">Horses</div>
          </Button>
          <Button href="/dashboard/livestock-farming/rabbits" outline>
            <div className="py-2">Rabbits</div>
          </Button>
          <Button href="/dashboard/livestock-farming/bees" outline>
            <div className="py-2">Bees</div>
          </Button>
        </div>
      </section>
    </>
  );
}
