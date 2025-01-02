import Container from "@/components/Container";
import SignOut from "@/components/SignOut";
import Title from "@/components/Title";
import Image from "next/image";

const DashboardPage = async () => {

  return (
    <Container className="py-10">
      <Title>Welcome to your Dashboard</Title>
      <div className="flex items-center gap-3 my-5">
        <Image
          src={''}
          alt="userImage"
          width={200}
          height={200}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-base font-semibold">name</p>
          <p className="text-sm font-mediums">email</p>
        </div>
      </div>
      <SignOut />
    </Container>
  );
};

export default DashboardPage;
