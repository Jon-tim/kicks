import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import JoinClub from "@/components/molecules/JoinClub";
export default function login() {
	return (
		<section className="px-4">
			<section >
				<h1 className="text-xl mb-1 font-bold ">Login</h1>
				<Link href="/register">
					<p className="underline text-sm">
						Don&apos;t have an account? sign-up here
					</p>
				</Link>
				<form action="">
					<input
						type="email"
						placeholder="Email"
						className="border-2 rounded-lg p-2 border-darkGray/50 w-full mt-4 mb-2 bg-transparent placeholder:capitalize placeholder:text-sm outline-none"
					/>
					<input
						type="password"
						placeholder="password"
						className="border-2 rounded-lg p-2 border-darkGray/50 w-full my-2 bg-transparent placeholder:capitalize placeholder:text-sm outline-none"
					/>
					<div
						className="flex items-center gap-4 mt-2
          "
					>
						<input
							type="checkbox"
							name=""
							id=""
						/>
						<p className="text-xs">
							Keep me logged in - applies to all log in options
							below
						</p>
					</div>
					<div className="flex items-center justify-between text-white bg-darkGray rounded-lg p-4 mt-4">
						<h1 className="text-white uppercase font-semibold text-xs">
							email login
						</h1>
						<BiRightArrowAlt />
					</div>
				</form>
				<div className="flex items-center justify-between my-4 gap-4">
					<div className="p-4 border-2 border-darkGray rounded-xl flex items-center justify-center flex-1">
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_183_3113)">
								<path
									d="M23.9886 12.511C23.9886 11.5047 23.9069 10.7703 23.7302 10.0088H12.2391V14.5508H18.9841C18.8482 15.6795 18.1138 17.3794 16.4819 18.5217L16.459 18.6737L20.0923 21.4884L20.344 21.5135C22.6558 19.3784 23.9886 16.2371 23.9886 12.511Z"
									fill="#4285F4"
								/>
								<path
									d="M12.2391 24.4781C15.5436 24.4781 18.3177 23.3901 20.344 21.5135L16.4819 18.5217C15.4484 19.2424 14.0613 19.7456 12.2391 19.7456C9.00254 19.7456 6.25557 17.6106 5.27636 14.6597L5.13282 14.6719L1.35489 17.5956L1.30548 17.733C3.31811 21.731 7.4522 24.4781 12.2391 24.4781Z"
									fill="#34A853"
								/>
								<path
									d="M5.27634 14.6597C5.01797 13.8982 4.86844 13.0822 4.86844 12.2391C4.86844 11.3959 5.01797 10.58 5.26275 9.81849L5.25591 9.6563L1.43062 6.68555L1.30547 6.74508C0.475969 8.40417 0 10.2673 0 12.2391C0 14.211 0.475969 16.074 1.30547 17.733L5.27634 14.6597Z"
									fill="#FBBC05"
								/>
								<path
									d="M12.2391 4.73241C14.5373 4.73241 16.0875 5.72512 16.9715 6.55472L20.4256 3.18216C18.3042 1.21031 15.5436 0 12.2391 0C7.4522 0 3.31811 2.74697 1.30548 6.74503L5.26276 9.81844C6.25558 6.86747 9.00254 4.73241 12.2391 4.73241Z"
									fill="#EB4335"
								/>
							</g>
							<defs>
								<clipPath id="clip0_183_3113">
									<rect
										width="24"
										height="24.5625"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className="p-4 border-2 border-darkGray rounded-xl flex items-center justify-center flex-1">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.0444 22.5348C16.8195 23.7221 15.4822 23.5346 14.1948 22.9722C12.8325 22.3973 11.5827 22.3723 10.1454 22.9722C8.34558 23.7471 7.3957 23.5222 6.32083 22.5348C0.221604 16.2481 1.12149 6.67428 8.04562 6.32432C9.7329 6.41181 10.9078 7.2492 11.8951 7.32419C13.3699 7.02423 14.7823 6.16184 16.3571 6.27433C18.2443 6.42431 19.6691 7.17421 20.6065 8.52404C16.707 10.8612 17.6319 15.9981 21.2065 17.4354C20.494 19.3102 19.5692 21.1724 18.0319 22.5473L18.0444 22.5348ZM11.7701 6.24933C11.5827 3.46218 13.8449 1.16247 16.4446 0.9375C16.807 4.16209 13.5199 6.56179 11.7701 6.24933Z"
								fill="black"
							/>
						</svg>
					</div>
					<div className="p-4 border-2 border-darkGray rounded-xl flex items-center justify-center flex-1">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_183_3122)">
								<path
									d="M24 12C24 5.37262 18.6274 0 12 0C5.37262 0 0 5.37253 0 12C0 17.9895 4.38825 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6575 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3398 7.875 13.875 8.80003 13.875 9.74906V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6117 22.954 24 17.9896 24 12Z"
									fill="#1877F2"
								/>
								<path
									d="M16.6711 15.4688L17.2031 12H13.875V9.74906C13.875 8.79994 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6575 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7453 23.9514 11.3722 24.0002 12 24C12.6278 24.0002 13.2547 23.9514 13.875 23.8542V15.4688H16.6711Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_183_3122">
									<rect
										width="24"
										height="24"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<p className=" text-xs mb-6 font-semibold">
					By clicking logging in, you agree to our website KicksClub
					Terms and Conditions, Kicks Privacy Notice and Cookie
					Policy.
				</p>
			</section>
			<>
				<JoinClub />
			</>
		</section>
	);
}
