import Image from "next/image";

const ReviveCommunity = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 space-y-6">
      {/* Logo Image */}
      <div className="w-full flex justify-center">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/631b46aefdaa4642451c1a83/36968e2a-509e-40e3-926f-e8ea2ea3a9ff/revive+all+leaf+logo+gif+%282%29.gif"
          alt="Revive Logo"
          width={500}
          height={720}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="text-center max-w-2xl space-y-4">
        <p className="text-lg font-semibold">Revive is a faith community in Streamwood IL being supported by Bethany Covenant.</p>
        <h2 className="text-xl font-bold">Who are we?</h2>
        <p className="text-lg">To borrow a phrase from Henri Nouwen, we are a community of <em>wounded healers</em>, committed to one another and to healthy neighborhoods—and we think that is best realized by following Jesus.</p>
        <p className="text-lg">We are multiethnic and multigenerational. We are egalitarian and committed to one another. We gather around tables to share our stories and worship together.</p>

        <h2 className="text-xl font-bold">Our Values</h2>
        <p className="text-lg">We believe God’s desire for our world is <em>shalom</em>, so practices of compassion, reconciliation, justice, and peace are at the center of our pursuits as a church.</p>
        <p className="text-lg">We are committed to pursuing racial righteousness that reflects the kingdom of heaven. Because of this, our leadership structure is deliberately collaborative and inclusive. We find our way together, even when it is difficult.</p>

        <h2 className="text-xl font-bold">Our Dream</h2>
        <p className="text-lg">We hope to open a community space where anyone can feel at home. We are raising money for Revive coffee house — where people can be seen, heard, valued, and get a great cup of coffee.</p>
        <p className="text-lg">Through the coffee house, we will partner with job development efforts locally, which is just one way we can participate in a thriving community. We believe this is what faith in action looks like!</p>
        <p className="text-lg font-bold"><a href="https://www.covchurchgiving.com/p-3587-revive.aspx" target="_blank" className="text-blue-600">Contribute here</a></p>
        <p className="text-lg font-bold">For more info <a href="mailto:melissa@bethanycov.org" className="text-blue-600">contact Melissa</a></p>
      </div>

      {/* Pastor Image */}
      <div className="w-full flex justify-center">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/631b46aefdaa4642451c1a83/c9552cdc-f07e-4610-87f7-ba1d3d411dee/Pastore+Mel+and+Joel.jpg"
          alt="Pastor Melissa and Joel"
          width={1661}
          height={1850}
          className="rounded-full object-cover w-60 h-60"
        />
      </div>

      {/* Bio */}
      <div className="text-center max-w-2xl">
        <p className="text-lg font-semibold">
          <strong>Melissa Duncan</strong> is a church planter and works bi-vocationally as a hospital chaplain. She is currently serving as Bethany Covenant’s church-planting resident while completing her Master of Divinity at North Park Theological Seminary. She loves traveling, writing, and hearing people’s stories. Her perfect day includes a good cup of coffee, meeting someone new, and a game of sand volleyball. She has been married to Joel since 2005. He works for World Relief as a church mobilizer. Together they are passionate about bridging cultures, adventure, and anything to do with their 3 kids.
        </p>
      </div>
    </div>
  );
};

export default ReviveCommunity;
