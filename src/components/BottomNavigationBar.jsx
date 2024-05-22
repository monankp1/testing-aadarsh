import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export function BottomNavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isQRVisible, setQRVisible] = useState(false);

  // Define icons and paths
  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a343ccdcce999f0fce3cc9992d8afd046297e73806a21fe358a773221ddc157c?apiKey=3250d16d0ad044539de68d3e33600ce8&",
      alt: "Home",
      path: "/home",
    },

    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/db776e3120bbe66a07054011a8d4645a6b70297fde6f443a4b2da0c0d2ac61e9?apiKey=3250d16d0ad044539de68d3e33600ce8&",
      alt: "sadgun-lekhan",
      path: "/sadgun-lekhan",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/112475a7ce727cec319e3cf3a0311c6f7fbaab1c57e83e3eba57c86efb4d498c?apiKey=3250d0ad044539de68d3e33600ce8&",
      alt: "Play activity",
      path: "/activity-page",
    },
    {
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAZlBMVEX////+/v4AAAAdHR0aGhqampoXFxeoqKgjIyP39/fHx8fOzs6IiIgGBgZ3d3cUFBS8vLwyMjLh4eHU1NTq6uoqKioPDw9bW1s9PT1WVlaQkJBnZ2fw8PCwsLBubm6BgYFFRUVNTU2YUQ8vAAAI0klEQVR4nO2baaNrMBCGZShFbQmxdvH//+SdSWhpnVOt3h4fvGcVxGMmy2SpYWzatGnTpk2bNm3a9H0xZrDBkfoapqxAjES/B4dszP3nUnxDQ7KO8++QHjWBozj/guUHEUwaHweKOZsC/0Mxw3X2Mhgqq9L12JFAmFuBtMyhJNTuquqM4e0jM4ChTAucNTEydgArKg/VrqJv+lWDKS/rYszBTsQoDWy7aL7HyH4XXVCDXYjhlYYt7ST9+d6riT/zGsx4WkF7xttbGXsZJenv97H7pn8J4/Ns8jEjao92bJ7n/SFEZOTC+1V+G9jJ0R+kCCuys/jJXcL9DCRm4YeXZP+rMsuy7HGKjUnZk7uSMP5MceQ1gLSfyCLI2xH9mKOkhxvwJ7IBdGuwhBQdIQqwTHvYOkt8OLwlzEiOcsKG3o4XBkjMSFtAoiA/XFXl0oK6Oryu096KLudbRqc92GaQ+Av79eYEZgRVOsxkBybE72QmkgjCYU5sl2FexcLg42jZkemM0zTjG0G2n0RB6I6SvAs6ZbescodgyeoareqS0zGOstVXjGx0lxNTjHBj1F3DER9waZZUGr6XsuUjm7FJOw77uG6c8Jjbox3xojawordKTi8BVnB2Rxb6iXHUGk9DTjDq3JyHS1+QB1haxt31JGM3WDXchgufpyreeYScZPQwt90SX2vG53ZUZkvjc9K1g/XOdx8hHxgpD18xLpB+ybEb7xlZFxc5ZYT9kepcIoDswB/qzaQd/c/YcaR7xq6qNGeQkaU6QCUZXLx7S/7CuEBzGBUJz6GDM7sfSz409JP1+ht21E3NCXs1gjMjqfytIPd8NuMCzfS1EYOKc2homGG9CbTL5XncqfwhI/bqidRQF4cqkNdqx0eZtxZGZjiBYgrazrlNqSHhsBZGowmlqicqVV0Sm6pQQj4i+jNG/MMvESHimL9nbHKyrHlXa/7Sjt5edy/XJoS5ITnbtIPVMMZ5maNKT3dI7MYI62Ckeb3GJelIQn1rX1tRNJfxv7fh/Zk+gmQ0KqBaFOAwYB7jAs1i7CMOxnpQowKLGnU4raNeD8LZaywuQA+45XgG8u/sOHB2Z1R+0W26HmasgvF6pqvVIsf+mhrxwHkam32dUa928QILo6lKozGb8T/X69sZBekXQICWDWVzF+SuwY7Kil3MY0MrZowVvs2omnMV8VB8QfXl+VjhD+zo7rohA7Tp4zusoTziA7PI1JHkg6N/Z1yg13zNWKU9bd8F4OthZIybpi6Mu34Sa3WM+DxtRpl2p1fI6GjGoJ1ed1lFnanAjmgmPpxsmdZhx53MSFE1bZdVMPJucYhPzeytw9fjOdJ1Mg5xpx66Cl83XCt92dffYzx061eHu31Tzxm/2fbogKKaXhRahR3xTM/4Yvv4bTuasOb2ceDrjfFPGL9ZHtU2rvmMxkfs+JDBnPbxPJORXdfivsd4rENSreacZ7Thn1yLm8c4SJheM/9fjC/O93Qr2GxmX2h8wNcCGQ/3uf7C2A9iZq5fMz2+WFKvMWiNbFmmd+Fgv+fjxXxZxzgYMVK2OVjyuKTtcTEH83gXDr6354Oxfj9Fx8h0WmBHCX9282/5Go60ZeKNqsPkno+5jGTH/lit15bSpKbqTTuq+9I8MIMoHm3AW7K/Jxjv74nbwJYmf9vVuvh7lrSkmVfOVceaXv3ovK5DFkXl4LgKpbRp0nxJcaR7j1Fg3e0So0mnd7abBTatvI83oEl7N7Hz4iVGWsUq77dVW/pwnDhL1uAu+l9CcTSmG9OXGBl3zHesNkf7StCs5VI70v0uP+7+gxzP1XPoy/YWsuke43NiizcOX0vKT1uo39d1hnKpHX98xdtzbld0e/dux/MfvQjRdd3p+4fmwK+maa7hDnM7zWtT+DGemjyfLXE6Tff3rDeZonLjU107TbeKxM8q0qU7nz+aAp9l45kY1HznFKMhqlB0VlSNk6xcbUnRbV34YcRwr6WMnnpS79S+tOlyVgP4On7hBZzdMxTdqpHIIKtRzjWS7Be4+xe8uoDe8TOM6tGN7zi+CqzS2DkKl5cQOUL518/AwUijEFfGulsqdMXR8VJM5Z7fMFf4wnV9v2lizIqu5UdHKMYF6uxo0IIvenB/wkjPK22Ai49mBHOv9k2jHfP4ohf9NWO3/p+eM7yo9Aw3jArPSGuz5dzan09RsK+wMnpZBEkrP8LIjNQGWZfIlqYtJOGpbsIIoGi1tysqfqe0iT3aP4GMBXUj3MUb8tqGvWAnyJCxxPLAMRyxL3i9Z3gmyLKF5XVG23FH/7gngKMf0Qe1UtbUYMepcr6fUwjjorttakWQUSnGN8xdGnSfXc2YE6MEGfMzJrIzBFWDiR+pMwYCoVsJ+ZQmgEEgBr0nsH1V6NMCCnyQgyBtoxmtoigSEeIroVltKNMQGVnPWLo4mMM3zdWnFT5Ur8lLlB3mXBoeeaflWK8tX++IAxB4QVTvwenrDG+a1GjJoQZH1/MQkpsd846RXN8xLpBiRJEd8XFHai6N1MFy5iCj1IxortQQVMQuNBHe12uyNO2q9iLI0xOYcVceh4yZv5wRnVvSqEBgeQxdKjpeI1wj3kNFaDtVHvHciTbME5Fqw3tGfMNL4+J1lYHlL0x3wYiREk9cJMt9rbuMFM20N6n0eyAvJpgevT/5EgsC7bjGeiKVWQzqZ1T7SLvOQGKTladGrAYXNjFCVx5z2npBiRLfYYE8M1GqGA+RpNg1hq+K41HtegST6jHzQ6RPqt0lq2mIJ9osbHRtqpAiOVD/U1lgV1XR8jRJsPUUdnYyVNGunTJbZEe3X3DBuIELwan3SoUQqep5uOD6A1mNOkcXN/om9VkW1t3k0r8uXdxw7jK1fEPXkAuEaJi+621dX28QE/Z/+3/6YPUWRRr9IGMQSLJhRvqQ9TMWP82zzYXsg4jpSPrx5C1ge0i7HvbTV/dB8tuI12wmwUbB7jDBuEL8hDrObgnlpk2bNm3atGnTpk2bNm3atGnTpk2bVql/dRyXggJYCAoAAAAASUVORK5CYII=",
      alt: "Lost and Found",
      path: "/lostandfound",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/32a9b4a7c852db6bafce147211031a18de646b8c1ae12b2db146a9146aeaeccd?apiKey=3250d16d0ad044539de68d3e33600ce8&",
      alt: "shibir-route",
      path: "/shibir-routes",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/98c3f0d8408fc6b68aee66633805752e1540a37031e53bc40962ee35ed752270?apiKey=3250d16d0ad044539de68d3e33600ce8&",
      alt: "user-profile",
      path: "/user-profile",
    },
  ];

  const handleIconClick = (path) => {
    navigate(path);
  };

  return (
    <AppContainer>
      <NavBar>
        <IconContainer>
          {icons.map((icon, index) => (
            <NavIcon
              key={index}
              src={icon.src}
              alt={icon.alt}
              onClick={() => handleIconClick(icon.path)}
              isActive={location.pathname === icon.path}
            />
          ))}
        </IconContainer>
      </NavBar>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed; /* Ensure the navbar is fixed at the bottom */
  left: 0; /* Align to the far left */
  right: 0; /* Stretch to the far right */
  bottom: 0; /* Align to the bottom */
  width: 100%; /* Ensure it takes full width */
`;

const NavBar = styled.nav`
  background: linear-gradient(180deg, #1d0f2a 0%, #270025 100%);
  display: flex;
  align-items: center; /* Center items vertically within the navbar */
  justify-content: center; /* Center items horizontally */
  width: 100%; /* Ensure it takes full width */
  padding: 10px 20px; /* Adjust padding to your preference */
`;

const IconContainer = styled.div`
  display: flex;
  gap: 35px; /* Adjust or remove gap based on your visual requirement */
  justify-content: space-between; /* This will space out the icons evenly */
  width: 100%; /* Ensure container takes full width to distribute icons */
`;

const NavIcon = styled.img`
  width: 30px; /* Adjust icon size */
  height: 30px; /* Adjust icon height */
  object-fit: contain;
  cursor: pointer;
  opacity: ${({ isActive }) =>
    isActive ? 1 : 0.4}; /* Highlight active icon */
`;
